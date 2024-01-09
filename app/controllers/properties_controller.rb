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
    # Ensure that a landlord is logged in
    return render json: { error: 'Unauthorized. Please log in.' }, status: :unauthorized unless current_landlord
  
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
    puts "Params Landlord ID: #{params[:landlordId]}"
    puts "Current Landlord ID: #{current_landlord&.id}"
  
    return render json: { error: 'Unauthorized access to property.' }, status: :unauthorized unless params[:landlordId].to_i == current_landlord&.id
  
    # Rest of the code
  end
  
  

  def property_params
    params.permit(:location, :environment, :security, :name, :images)
  end
end
