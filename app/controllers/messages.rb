class MessagesController < ApplicationController
    before_action :set_user
    before_action :set_landlord
    before_action :set_property
    before_action :set_message, only: [:show, :edit, :update, :destroy]
  
    def new
      @message = @user.messages.build
    end
  
    def create
      @message = @user.messages.build(message_params)
      if @message.save
        redirect_to user_message_path(@user, @message), notice: 'Message was successfully created.'
      else
        render :new
      end
    end
  
    def show
      # Implementation for showing a specific message
    end
  
    def edit
      # Implementation for editing a specific message
    end
  
    def update
      if @message.update(message_params)
        redirect_to user_message_path(@user, @message), notice: 'Message was successfully updated.'
      else
        render :edit
      end
    end
  
    def destroy
      @message.destroy
      redirect_to user_messages_path(@user), notice: 'Message was successfully destroyed.'
    end
  
    private
  
    def set_user
      @user = User.find(params[:user_id])
    end
  
    def set_landlord
      @landlord = Landlord.find(params[:landlord_id])
    end
  
    def set_property
      @property = Property.find(params[:property_id])
    end
  
    def set_message
      @message = @user.messages.find(params[:id])
    end
  
    def message_params
      params.require(:message).permit(:content)
    end
  end
  