class PropertiesController < ApplicationController
  before_action :set_property, only: [:show, :edit, :update, :destroy]
  before_action :authorize_landlord, except: [:index, :show]

  def index
    @properties = Property.where(landlord_id: params[:landlord_id])
    render json: @properties
  end

  def show
    render json: @property
  end


  def create
    @property = current_landlord.properties.build(property_params)
    
    if @property.save
      render json: @property, status: :created
    else
      render json: { errors: @property.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def edit
    render json: @property
  end

  def update
    if @property.update(property_params)
      render json: @property
    else
      render json: { errors: @property.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def destroy
    @property.destroy
    head :no_content
  end

  private

  def set_property
    @property = Property.find(params[:id])
  end

  def authorize_landlord
    return if current_landlord == @property.landlord

    render json: { error: 'Unauthorized access to property.' }, status: :unauthorized
  end

  def property_params
    params.permit(:location, :environment, :security, :name, :images)
  end
end
