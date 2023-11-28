class LandlordsController < ApplicationController
  before_action :set_landlord, only: [:show, :edit, :update]
  before_action :require_login, except: [:create, :login, :process_login]

  def show
    render json: {
      landlord: @landlord,
      properties: @landlord.properties,
      messages: @landlord.messages
    }
  end
  

  def edit
    render json: @landlord
  end

  def update
    if @landlord.update(landlord_params)
      render json: @landlord
    else
      render json: { errors: @landlord.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def create
    @landlord = Landlord.new(landlord_params)
    if @landlord.save
      session[:landlord_id] = @landlord.id
      render json: @landlord
    else
      render json: { errors: @landlord.errors.full_messages }, status: :unprocessable_entity
    end
  end



  def process_login
    @landlord = Landlord.find_by(email: params[:email])

    if @landlord && @landlord.authenticate(params[:password])
      session[:landlord_id] = @landlord.id
      render json: @landlord
    else
      render json: { error: 'Invalid email or password' }, status: :unauthorized
    end
  end

  private

  def set_landlord
    @landlord = Landlord.find(params[:id])
  end

  def landlord_params
    params.require(:landlord).permit(:username, :email, :password, :bio, :phone_number, :avatar)
  end

  def require_login
    unless current_landlord
      render json: { error: 'You must be logged in as a landlord to access this page' }, status: :unauthorized
    end
  end
end
