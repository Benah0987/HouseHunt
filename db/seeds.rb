# Landlords
landlord1 = Landlord.create(
  username: 'landlord1',
  email: 'landlord1@example.com',
  password: 'password123',
  bio: 'Experienced landlord with multiple properties.',
  phone_number: '1234567890',
  image: 'url_to_landlord_image1'
)

landlord2 = Landlord.create(
  username: 'landlord2',
  email: 'landlord2@example.com',
  password: 'password456',
  bio: 'New landlord eager to provide great housing.',
  phone_number: '9876543210',
  image: 'url_to_landlord_image2'
)

# Users
user1 = User.create(
  username: 'user1',
  email: 'user1@example.com',
  password: 'password789'
)

user2 = User.create(
  username: 'user2',
  email: 'user2@example.com',
  password: 'passwordabc'
)

# Save landlords before creating associated properties and rooms

landlord1.save
landlord2.save

# Properties
property1 = landlord1.properties.create(
  name: 'Property A',
  images: ['url_to_property_image1', 'url_to_property_image2'],
  location: 'City X',
  environment: 'Urban',
  security: 'High'
)

property2 = landlord2.properties.create(
  name: 'Property B',
  images: ['url_to_property_image3', 'url_to_property_image4'],
  location: 'City Y',
  environment: 'Suburban',
  security: 'Medium'
)

# Rooms
room1 = property1.rooms.create(
  room_type: 'Single',
  price: 800,
  tenant_name: 'Tenant A',
  occupied: true,
  images: ['url_to_room_image1', 'url_to_room_image2']
)

room2 = property2.rooms.create(
  room_type: 'Double',
  price: 1000,
  tenant_name: 'Tenant B',
  occupied: false,
  images: ['url_to_room_image3', 'url_to_room_image4']
)

# Messages
message1 = Message.create(
  user: user1,
  landlord: landlord1,
  property: property1,
  content: 'Interested in renting a room.'
)

message2 = Message.create(
  user: user2,
  landlord: landlord2,
  property: property2,
  content: 'Can I schedule a property visit?'
)

# Add more seed data as needed
