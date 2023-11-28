class PropertiesController < ApplicationController
    before_action :set_property, only: [:show, :edit, :update, :destroy]
  
    def new
      @property = Property.new
    end

    def index
      @properties = Property.where(landlord_id: params[:landlord_id])
      render json: @properties
    end
  
    def create
      @property = Property.new(property_params)
      if @property.save
        redirect_to @property, notice: 'Property was successfully created.'
      else
        render :new
      end
    end
  
    def show
      # Implementation for showing a specific property
    end
  
    def edit
      # Implementation for editing a specific property
    end
  
    def update
      if @property.update(property_params)
        redirect_to @property, notice: 'Property was successfully updated.'
      else
        render :edit
      end
    end
  
    def destroy
      @property.destroy
      redirect_to properties_url, notice: 'Property was successfully destroyed.'
    end
  
    private
  
    def set_property
      @property = Property.find(params[:id])
    end
  
    def property_params
      params.require(:property).permit(:location, :environment, :security)
    end
  end
  