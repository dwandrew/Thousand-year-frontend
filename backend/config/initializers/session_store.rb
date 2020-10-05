if Rails.env === 'production' 
    Rails.application.config.session_store :cookie_store, key: '_thousand-year-manager', domain: '_thousand-year-manager-json-api'
  else
    Rails.application.config.session_store :cookie_store, key: '_thousand-year-manager'
end