Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  get "/" =>"home#top"
  get "about"=>"home#about"
  get "pansywalk"=>"home#pansywalk"
end
