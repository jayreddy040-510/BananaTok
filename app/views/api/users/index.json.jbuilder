@users.each do |user|
    json.set! user.id do
    json.extract! user, :id, :email, :username, :verified, :name :created_at, :updated_at
    end
end