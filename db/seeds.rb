# db/seeds.rb

# Create a user
user = User.create(username: 'john_doe', email: 'john@example.com', password_digest: 'password123')

# Create a landlord
landlord = Landlord.create!(
    username: 'example_landlord',
    email: 'landlord5@example.com',
    password_digest: BCrypt::Password.create('password')
  )
  
  # Create a property for the landlord
  property = landlord.properties.create!(
    location: 'Example Location',
    environment: 'Example Environment',
    security: 'Example Security'
  )
  
  # Create a room for the property
  property.rooms.create!(
    room_type: 'Single',
    price: 1000
  )
  

# Create a message between the user and landlord
# Create a message between the user and landlord
message = Message.create(
    user_id: user.id,
    landlord_id: landlord.id,
    property_id: property.id,
    content: 'Interested in the room.'
  )
  

puts 'Seed data created successfully!'
