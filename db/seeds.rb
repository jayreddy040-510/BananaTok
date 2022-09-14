require 'open-uri'
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

ApplicationRecord.transaction do
  puts "Destroying tables..."
  # Unnecessary if using `rails db:seed:replant`
  Post.destroy_all
  User.destroy_all
  puts "Resetting primary keys..."
  %w(posts users).each do |table_name|
      ApplicationRecord.connection.reset_pk_sequence!(table_name)
  end


  user1 = User.create!(name: "dee-ayy-go", password: "dieguccio", username: "dieguccio", about_me: "If it ain't Gucci, then it ain't me. Taylor Swift is the Madonna of our era, don't @ me. SF transplant. Dead inside.", email: "dieguccio@appacademy.com", bananas_count: 1000000, follows_count: 20)

  user2 = User.create!(name:"CelJohn4Ever", password: "love2love", username: "Celeste&Josh<33", about_me: "Hey y'all! We're Celeste and Josh and welcome to our BananaTok page! Follow for daily videos of life in the beautiful city of Paris!", email: "celestial91@gmail.com", bananas_count: 3568, follows_count: 823)

  user3 = User.create!(name:"Sarah",password: "blackisbeautiful", username: "BlackGirlMagic", about_me: "We post daily black creator content to spread daily positive affirmations that black is, and always has been, beautiful", email: "allblackeverything@appacademy.com", bananas_count: 1567439, follows_count: 88332)

  # user4 = User.create!(password: "silencio", username: "art_of_silence", about_me: "The gift of hearing is best appreciated in its absence - I like to post silent things. Follow me on Bananagram! ", email: "b.broheim2@gmail.com", bananas_count: 23, follows_count: 2)

  user1_post1 = Post.create!(caption: "Look at my dog and how cute he is!!", topic: "Animals", author_id: 1, banana_count: 14328, comment_count: 245)

  user1_post2 = Post.create!(caption: "Dogs add slivers of joy to this desolate desert of an existence", topic: "Animals", author_id: 1, banana_count: 96453, comment_count: 113)

  # user2_post1 = Post.create!(caption: "Josh made banana crepes for Sunday breakfast !!", topic: "Love", author_id: 2)

  user2_post2 = Post.create!(caption: "We didn't see each other for a whole 3 hours ! xD", topic: "Love", author_id: 2, banana_count: 283456, comment_count: 864)
  
  # user3_post1 = Post.create!(caption: "It's time for us to stop running into the arms of the wolf, trying to escape the fox! - Malcolm X", topic: "Education", author_id: 3)

  user3_post2 = Post.create!(caption: "The ability to read awoke inside of me some long dormant craving to be mentally alive - Malcolm X", topic: "Education", author_id: 3, banana_count: 458, comment_count: 13)

  # user4_post1 = Post.create!(caption: "silence is golden", topic: "Gaming", author_id: 4)



  file = URI.open('https://bananatok-seeds.s3.us-west-1.amazonaws.com/1.mp4')

  user1_post1.video.attach(io: file, filename: '1.mp4')

  # file = URI.open('https://bananatok-seeds.s3.us-west-1.amazonaws.com/3.mp4')
  
  # user2_post1.video.attach(io: file, filename: '3.mp4')
  
  file = URI.open('https://bananatok-seeds.s3.us-west-1.amazonaws.com/4.mp4')
  
  user2_post2.video.attach(io: file, filename: '4.mp4')
  
  # file = URI.open('https://bananatok-seeds.s3.us-west-1.amazonaws.com/6.mp4')
  
  # user3_post1.video.attach(io: file, filename: '6.mp4')
  
  file = URI.open('https://bananatok-seeds.s3.us-west-1.amazonaws.com/5.mp4')
  
  user3_post2.video.attach(io: file, filename: '5.mp4')
  
  file = URI.open('https://bananatok-seeds.s3.us-west-1.amazonaws.com/2.mp4')

  user1_post2.video.attach(io: file, filename: '2.mp4')

  # file = URI.open('https://bananatok-seeds.s3.us-west-1.amazonaws.com/7.mp4')

  # user4_post1.video.attach(io: file, filename: '7.mp4')





  








end
