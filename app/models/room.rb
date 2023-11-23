# app/models/room.rb
class Room < ApplicationRecord
  belongs_to :property
  has_many_attached :images
  # other associations and validations...
  validates :room_type, presence: true
  validates :price, presence: true
  validates :tenant_name, allow_nil: true
end
