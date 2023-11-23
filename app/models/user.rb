# app/models/user.rb
class User < ApplicationRecord
    has_one_attached :avatar
    # other associations and validations...
  
    validates :username, presence: true
    validates :email, presence: true, uniqueness: true
    validates :password_digest, presence: true
  end
  