class CreateComments < ActiveRecord::Migration[7.0]
  def change
    create_table :comments do |t|
      t.string :body, null: false, limit: 280
      t.references :giver, foreign_key: {to_table: :users}, null: false
      t.references :post, foreign_key: true, null: false
      t.timestamps 
    end
  end
end
