class PropertiesController < ApplicationController
  skip_before_action :verify_authenticity_token
  before_action :set_property, only: [:show, :edit, :update, :destroy]
  before_action :authorize_landlord, except: [:index, :show]

  def index
    @properties = Property.all
    render json: @properties
  end

  def show
    @property = Property.find(params[:id])
    render json: {
      property: @property,
      landlord: @property.landlord
    }
  end
  
  def rooms
    @property = Property.find(params[:property_id])
    @rooms = @property.rooms
    render json: @rooms
  end


  def create
    # Create properties associated with the current landlord
    @property = current_landlord.properties.new(property_params)

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
    return unless @property && current_landlord == @property.landlord
  
    render json: { error: 'Unauthorized access to property.' }, status: :unauthorized
  end
  

  def property_params
    params.permit(:location, :environment, :security, :name, :images)
  end
end
