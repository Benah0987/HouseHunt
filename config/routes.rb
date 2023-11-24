Rails.application.routes.draw do
  resources :landlords, only: [:show, :edit, :update, :new, :create] do
    resources :messages, only: [:index, :new, :create]
  end

  resources :users, only: [:new, :create, :show, :edit] do
    resources :messages, only: [:index, :new, :create]
  end

  resources :properties do
    resources :rooms
    resources :messages, only: [:index, :new, :create]
  end

  # Other routes for your application...

  root 'welcome#index' # Replace 'welcome#index' with the desired root path.
end
