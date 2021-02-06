class CreateAlbums < ActiveRecord::Migration[6.1]
  def change
    create_table :albums do |t|
      t.string :name
      t.string :image_url
      t.integer :rating

      t.timestamps
    end
  end
end
