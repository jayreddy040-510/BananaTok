class CreateBananas < ActiveRecord::Migration[7.0]
  def change
    create_table :bananas do |t|
      t.references :giver, foreign_key: {to_table: :users}, null: false
      t.references :receiver, foreign_key: {to_table: :users}, null: false
      t.references :post, foreign_key: true
      t.references :bananable, polymorphic: true
      t.index [:giver_id, :receiver_id, :post_id], unique: true
      t.timestamps 
    end
  end
end
