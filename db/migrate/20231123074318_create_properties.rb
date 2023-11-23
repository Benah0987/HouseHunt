class CreateProperties < ActiveRecord::Migration[7.0]
  def change
    create_table :properties do |t|
      t.string :location
      t.string :environment
      t.string :security
      t.references :landlord, null: false, foreign_key: true

      t.timestamps
    end
  end
end
