Rails.application.routes.draw do

  get '/immortals/published', to: 'immortals#published'

  resources :journals
  resources :experiences
  resources :memories
  resources :resources
  resources :marks
  resources :characters
  resources :skills
  
  resources :immortals do
    resources :skills, only: [:create, :show, :index, :destroy]
  end

  resources :immortals do
    resources :marks, only: [:create, :show, :index, :destroy]
  end

  resources :immortals do
    resources :characters, only: [:create, :show, :index, :destroy]
  end

  resources :immortals do
    resources :resources, only: [:create, :show, :index, :destroy]
  end

  resources :immortals do
    resources :memories, only: [:create, :show, :index, :destroy]
  end
  
  resources :immortals do
    resources :journals, only: [:create, :show, :index, :destroy]
  end

  resources :memories do 
    resources :experiences, only: [:create, :index, :show, :destroy]
  end

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  post '/login',    to: 'sessions#create'
  get '/logout',   to: 'sessions#destroy'
  get '/logged_in', to: 'sessions#is_logged_in?'

  resources :users, only: [:create, :show, :index] do 
    resources :items, only: [:create, :show, :index, :destroy]
  end

  resources :users do 
    resources :immortals, only: [:create, :show, :index, :destroy] 
  end

end
