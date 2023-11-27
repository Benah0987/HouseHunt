class RoomsController < ApplicationController
    before_action :set_property
    before_action :set_room, only: [:show, :edit, :update, :destroy]
  
    def new
      @room = @property.rooms.build
    end
  
    def create
      @room = @property.rooms.build(room_params)
      if @room.save
        redirect_to property_room_path(@property, @room), notice: 'Room was successfully created.'
      else
        render :new
      end
    end
  
    def show
      # Implementation for showing a specific room
    end
  
    def edit
      # Implementation for editing a specific room
    end
  
    def update
      if @room.update(room_params)
        redirect_to property_room_path(@property, @room), notice: 'Room was successfully updated.'
      else
        render :edit
      end
    end
  
    def destroy
      @room.destroy
      redirect_to property_path(@property), notice: 'Room was successfully destroyed.'
    end
  
    private
  
    def set_property
      @property = Property.find(params[:property_id])
    end
  
    def set_room
      @room = @property.rooms.find(params[:id])
    end
  
    def room_params
      params.require(:room).permit(:room_type, :price, :tenant_name, :occupied)
    end
  end
  