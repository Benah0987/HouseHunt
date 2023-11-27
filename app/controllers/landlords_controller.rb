class LandlordsController < ApplicationController
  before_action :set_landlord, only: [:show, :edit, :update]
  before_action :require_login, except: [:new, :create, :login, :process_login]

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
      # Log in the new landlord after registration
      session[:landlord_id] = @landlord.id
      redirect_to landlord_path(@landlord), notice: 'Landlord was successfully created.'
    else
      render :new
    end
  end

  def new
    @landlord = Landlord.new
  end

  def login
    # Render login form
  end

  def process_login
    @landlord = Landlord.find_by(email: params[:email])
a
    if @landlord && @landlord.authenticate(params[:password])
      session[:landlord_id] = @landlord.id
      redirect_to landlord_path(@landlord), notice: 'Login successful.'
    else
      flash.now[:alert] = 'Invalid email or password.'
      render :login
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
      flash[:alert] = 'You must be logged in as a landlord to access this page.'
      redirect_to login_path
    end
  end
end
