# app/controllers/landlords_controller.rb

class LandlordsController < ApplicationController
    before_action :set_landlord, only: [:show, :edit, :update]
  
    def show
      # Implementation for showing a specific landlord
      # Access landlord data through the @landlord instance variable
    end
  
    def edit
      # Implementation for editing a specific landlord
      # Access landlord data through the @landlord instance variable
    end
  
    def update
      # Implementation for updating a specific landlord
      if @landlord.update(landlord_params)
        redirect_to landlord_path(@landlord), notice: 'Landlord was successfully updated.'
      else
        render :edit
      end
    end
  
    def create
      @landlord = Landlord.new(landlord_params)
      if @landlord.save
        redirect_to landlord_path(@landlord), notice: 'Landlord was successfully created.'
      else
        render :new
      end
    end
  
    private
  
    def set_landlord
      @landlord = Landlord.find(params[:id])
    end
  
    def landlord_params
      params.require(:landlord).permit(:username, :email, :password, :bio, :phone_number, :avatar)
    end
  end
  