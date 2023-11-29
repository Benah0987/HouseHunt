Rails.application.routes.draw do
  resources :landlords, only: [:show, :edit, :update, :new, :create] do
    resources :messages, only: [:index, :new, :create]
  end

  resources :users, only: [:index, :create, :show, :edit, :update, :destroy] do
    resources :messages, only: [:index, :new, :create]
  end

  resources :properties do
    resources :rooms
    resources :messages, only: [:index, :new, :create]
  end

  # Session routes
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'

  # Other routes for your application...
  post '/landlords/login', to: 'landlords#process_login'
  get '/landlords/logout', to: 'sessions#destroy_landlord'
 
end
