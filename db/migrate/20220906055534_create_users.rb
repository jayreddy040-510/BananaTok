class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.string :username, null: false
      t.string :about_me, default: "About me!", limit: 150
      t.string :email, null: false
      t.bigint :bananas_count, null: false, default: 0
      t.bigint :follows_count, null: false, default: 0
      t.string :password_digest, null: false
      t.string :session_token, null: false
      t.timestamps

      t.index :username, unique: true
      t.index :email, unique: true
      t.index :session_token, unique: true
    end
  end
end
