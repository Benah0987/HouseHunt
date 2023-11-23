# app/models/landlord.rb
class Landlord < ApplicationRecord
    has_one_attached :avatar
    has_many :properties, dependent: :destroy
    # other associations and validations...
  
    accepts_nested_attributes_for :properties
  
    validates :username, presence: true
    validates :email, presence: true, uniqueness: true
    validates :password_digest, presence: true
  end
  