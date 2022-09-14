class AddColumnToPosts < ActiveRecord::Migration[7.0]
  def change
    # add_column :users, :verified, :boolean, default: false
    add_column :posts, :tags, :string, default: "#gucci #words #shoes #ilovemylife #beatsbydre #zuzuonthebeat #fullstackproject", limit: 100
    add_column :posts, :sound, :string
  end
end
