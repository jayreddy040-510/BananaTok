class CreateBananas < ActiveRecord::Migration[7.0]
  def change
    create_table :bananas do |t|
      t.string :banana_type, null: false, inclusion: {in: ["post", "comment"]}
      t.references :banana_giver, foreign_key: {to_table: :users}, null: false
      t.references :banana_receiver, foreign_key: {to_table: :users}, null: false
      t.references :banana_post, foreign_key: {to_table: :posts}
      t.timestamps 
    end
  end
end
