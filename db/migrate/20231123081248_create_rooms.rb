class CreateRooms < ActiveRecord::Migration[7.0]
  def change
    create_table :rooms do |t|
      t.string :room_type
      t.integer :price
      t.string :tenant_name
      t.boolean :allow_nil
      t.references :property, null: false, foreign_key: true

      t.timestamps
    end
  end
end
