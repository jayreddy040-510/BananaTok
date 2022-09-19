require 'open-uri'
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

# ApplicationRecord.transaction do
  puts "Destroying tables..."
  # Unnecessary if using `rails db:seed:replant`
  Post.destroy_all
  User.destroy_all
  puts "Resetting primary keys..."
  %w(posts users).each do |table_name|
      ApplicationRecord.connection.reset_pk_sequence!(table_name)
  end


  user1 = User.create!(name: "dee-ayy-go", password: "dieguccio", username: "dieguccio", about_me: "If it ain't Gucci, then it ain't me. Taylor Swift is the Madonna of our era, don't @ me. SF transplant. Dead inside.", email: "dieguccio@appacademy.com", bananas_count: 1000000, follows_count: 20, verified: true)

  user2 = User.create!(name:"CelJohn4Ever", password: "love2love", username: "Celeste&Josh<33", about_me: "Hey y'all! We're Celeste and Josh and welcome to our BananaTok page! Follow for daily videos of life in the beautiful city of Paris!", email: "celestial91@gmail.com", bananas_count: 3568, follows_count: 823, verified: true)

  user3 = User.create!(name:"Sarah",password: "blackisbeautiful", username: "BlackGirlMagic", about_me: "We post daily black creator content to spread daily positive affirmations that black is, and always has been, beautiful", email: "allblackeverything@appacademy.com", bananas_count: 1567439, follows_count: 88332)

  user4 = User.create!(password: "silencio", username: "art_of_silence", about_me: "The gift of hearing is best appreciated in its absence - I like to post silent things. Follow me on Bananagram! ", email: "b.broheim2@gmail.com", bananas_count: 23, follows_count: 2)
 
  user5 = User.create!(password: "password", username: "225lean", name: "GGran", about_me: "Post daily fitness content! Follow me for fitspo!", email: "lifting@gmail.com", verified: true)


  # user1_post1 = Post.create!(caption: "Look at my dog and how cute he is!!", topic: "Animals", author_id: 1, banana_count: 14328, comment_count: 245, tags: "#livelovelaugh, #caninecuties, #taylorswift, #downwiththesickness, #alalala")

  user1_post2 = Post.create!(caption: "Dogs add slivers of joy to this desolate desert of an existence", topic: "Animals", author_id: 1, banana_count: 96453, comment_count: 113)

  user2_post1 = Post.create!(caption: "Josh made banana crepes for Sunday breakfast !!", topic: "Beauty", author_id: 2, sound: "Jack Johnson - Banana Pancakes", tags: "#yummy, #food, #feedme, #banana, #pancakes, #bananapancakes")

  user2_post2 = Post.create!(caption: "We didn't see each other for a whole 3 hours ! xD", topic: "Beauty", author_id: 2, banana_count: 283456, comment_count: 864, tags: "#tags, #imissedhim, #lifeinParis, #champselysees", sound: "Joe Dassin - Champs Elysees")
  
  user3_post1 = Post.create!(caption: "It's time for us to stop running into the arms of the wolf, trying to escape the fox! - Malcolm X", topic: "Beauty", author_id: 3, tags: "#blackisbeautiful", sound: "Malcolm X - 50 Greatest Speeches of All Time")

  # user3_post2 = Post.create!(caption: "The ability to read awoke inside of me some long dormant craving to be mentally alive - Malcolm X", topic: "Beauty", author_id: 3, banana_count: 458, comment_count: 13)

  user4_post1 = Post.create!(caption: "silence is golden", topic: "Animals", author_id: 4, banana_count: 120, comment_count: 3)

  user5_post1 = Post.create!(caption: "Ripping Waves, Yours Truly~~", tags: "#hang10 #or20 #rocketpower #ridinwaves #withtheboys #ilovemylife", topic: "Sports", author_id: 5, banana_count: 458, comment_count: 0)

  user5_post2 = Post.create!(caption: "My body is a temple and the gym is how I worship - Me", tags: "#chestandarmseveryday #biceps #fitpic #worship #church #gym #dumbbells #forbes30over30", topic: "Sports", author_id: 5, banana_count: 22000, comment_count: 123, sound: "Guns N' Roses - Sweet Child Of Mine")



  # file = URI.open('https://bananatok-seeds.s3.us-west-1.amazonaws.com/1.mp4')

  # user1_post1.video.attach(io: file, filename: '1.mp4')

  file = URI.open('https://bananatok-seeds.s3.us-west-1.amazonaws.com/3.mp4')
  
  user2_post1.video.attach(io: file, filename: '3.mp4')
  
  file = URI.open('https://bananatok-seeds.s3.us-west-1.amazonaws.com/4.mp4')
  
  user2_post2.video.attach(io: file, filename: '4.mp4')
  
  file = URI.open('https://bananatok-seeds.s3.us-west-1.amazonaws.com/6.mp4')
  
  user3_post1.video.attach(io: file, filename: '6.mp4')
  
  # file = URI.open('https://bananatok-seeds.s3.us-west-1.amazonaws.com/5.mp4')
  
  # user3_post2.video.attach(io: file, filename: '5.mp4')
  
  file = URI.open('https://bananatok-seeds.s3.us-west-1.amazonaws.com/2.mp4')

  user1_post2.video.attach(io: file, filename: '2.mp4')

  file = URI.open('https://bananatok-seeds.s3.us-west-1.amazonaws.com/7.mp4')

  user4_post1.video.attach(io: file, filename: '7.mp4')

  file = URI.open('https://bananatok-seeds.s3.us-west-1.amazonaws.com/8.mp4')
  user5_post1.video.attach(io: file, filename: '8.mp4')

  file = URI.open('https://bananatok-seeds.s3.us-west-1.amazonaws.com/9.mp4')
  user5_post2.video.attach(io: file, filename: '9.mp4')




  








# end





# require 'open-uri'
# # This file should contain all the record creation needed to seed the database with its default values.
# # The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
# #
# # Examples:
# #
# #   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
# #   Character.create(name: "Luke", movie: movies.first)

# ApplicationRecord.transaction do
#   puts "Destroying tables..."
#   # Unnecessary if using `rails db:seed:replant`
#   Post.destroy_all
#   User.destroy_all
#   puts "Resetting primary keys..."
#   %w(posts users).each do |table_name|
#       ApplicationRecord.connection.reset_pk_sequence!(table_name)
#   end


#   user1 = User.create!(name: "dee-ayy-go", password: "dieguccio", username: "dieguccio", about_me: "If it ain't Gucci, then it ain't me. Taylor Swift is the Madonna of our era, don't @ me. SF transplant. Dead inside.", email: "dieguccio@appacademy.com", bananas_count: 1000000, follows_count: 20, verified: true)

#   user2 = User.create!(name:"CelJohn4Ever", password: "love2love", username: "Celeste&Josh<33", about_me: "Hey y'all! We're Celeste and Josh and welcome to our BananaTok page! Follow for daily videos of life in the beautiful city of Paris!", email: "celestial91@gmail.com", bananas_count: 3568, follows_count: 823, verified: true)

#   user3 = User.create!(name:"Sarah",password: "blackisbeautiful", username: "BlackGirlMagic", about_me: "We post daily black creator content to spread daily positive affirmations that black is, and always has been, beautiful", email: "allblackeverything@appacademy.com", bananas_count: 1567439, follows_count: 88332)

#   user4 = User.create!(password: "silencio", username: "art_of_silence", about_me: "The gift of hearing is best appreciated in its absence - I like to post silent things. Follow me on Bananagram! ", email: "b.broheim2@gmail.com", bananas_count: 23, follows_count: 2)

#   user5 = User.create!(password: "password", username: "225lean", name: "GGran", about_me: "Post daily fitness content! Follow me for fitspo!", email: "lifting@gmail.com", verified: true)

#   user6 = User.create!(password: "password", username: "el_Tigre", name: "Taylor (Swift?)", about_me: "Mew3King, Smash God, but nicer", email: "soraisbrokenbtw@gmail.com", verified: true)

#   user7 = User.create!(password: "password", username: "ZhongXina", name: "Bo", about_me: "Food and Chinese Politics Critic", email: "memes4dreams@gmail.com", verified: false)

#   user8 = User.create!(password: "password", username: "anon_anon", about_me: "AnonymousUser5463", email: "anon@gmail.com", verified: false)

#   user9 = User.create!(password: "password", name:"Elizabeth, the Bot", username: "lizbot", about_me: "Dancer at heart <33", email: "helper@gmail.com", verified: true)

#   user10 = User.create!(password: "password", username: "krystal_ball", name: "krystal,", about_me: "Beauty Influencer - follow me on Bananagram @Krystal_Ball ", email: "beauty@gmail.com", verified: true)

#   user1_post1 = Post.create!(caption: "Look at my dog and how cute he is!! Aside: I am the king of food hot takes and I won't apologize for it.", topic: "Animals", author_id: 1, banana_count: 14328, comment_count: 245, tags: "#livelovelaugh, #caninecuties, #taylorswift, #downwiththesickness, #alalala")

#   user1_post2 = Post.create!(caption: "Dogs add slivers of joy to this desolate desert of an existence", topic: "Animals", author_id: 1, banana_count: 96453, comment_count: 113)

#   user2_post1 = Post.create!(caption: "Josh made banana crepes for Sunday breakfast !!", topic: "Love", author_id: 2, sound: "Jack Johnson - Banana Pancakes", tags: "#yummy, #food, #feedme, #banana, #pancakes, #bananapancakes")

#   user2_post2 = Post.create!(caption: "We didn't see each other for a whole 3 hours ! xD", topic: "Love", author_id: 2, banana_count: 283456, comment_count: 864, tags: "#tags, #imissedhim, #lifeinParis, #champselysees", sound: "Joe Dassin - Champs Elysees")
  
#   user3_post1 = Post.create!(caption: "It's time for us to stop running into the arms of the wolf, trying to escape the fox! - Malcolm X", topic: "Education", author_id: 3, tags: "#blackisbeautiful", sound: "Malcolm X - 50 Greatest Speeches of All Time")

#   user3_post2 = Post.create!(caption: "The ability to read awoke inside of me some long dormant craving to be mentally alive - Malcolm X", topic: "Education", author_id: 3, banana_count: 458, comment_count: 13)

#   user4_post1 = Post.create!(caption: "silence is golden", topic: "Gaming", author_id: 4, banana_count: 120, comment_count: 3)

#   user5_post1 = Post.create!(caption: "Ripping Waves, Yours Truly~~", tags: "#hang10 #or20 #rocketpower #ridinwaves #withtheboys #ilovemylife", topic: "Sports", author_id: 5, banana_count: 458, comment_count: 0)
 
#   user5_post2 = Post.create!(caption: "My body is a temple and the gym is how I worship - Me", tags: "#chestandarmseveryday #biceps #fitpic #worship #church #gym #dumbbells #forbes30over30", topic: "Sports", author_id: 5, banana_count: 22000, comment_count: 123, sound: "Guns N' Roses - Sweet Child Of Mine")

#   user6_post1 = Post.create!(caption: "Saw this ad the other day trying to target gamers, thought it was pretty funny!", tags: "#gamers #gaming #leagueoflegends #riot #controller #moba", topic: "Gaming", author_id: 6, banana_count: 234000, comment_count: 14)

#   user7_post1 = Post.create!(caption: "LOOK AT HOW GOOD THESE VEGGIES LOOK!", topic: "Food", tags: "#veggies #healthy #livelovelaugh #produce #supermarket #olderwoman", author_id: 7, banana_count: 420000, comment_count: 69)

#   user7_post2 = Post.create!(caption: "I like Indian food - do you?", topic: "Food", author_id: 7, banana_count: 420000, comment_count: 69)

#   user7_post3 = Post.create!(caption: "Lunch today was yummmmm!!", tags:"#lunch #almuerzo #airport #foodcritic #thelifeofZhongXina", topic: "Food", author_id: 7, banana_count: 420000, comment_count: 69)

#   user8_post1 = Post.create!(caption: "train ride", tags:"#train #ride #trainride #onatrain #choochoo", topic: "Other", author_id: 8, banana_count: 0, comment_count: 0)

#   user8_post2 = Post.create!(caption: "train ride2", tags:"#train #ride #trainride #onatrain #choochoo, #ilovetrains", topic: "Beauty", author_id: 8, banana_count: 0, comment_count: 0)

#   user9_post1 = Post.create!(caption: "sunday afternoon vibin'", tags:"#sunday #afternoon #froufrou #letgo #gardenstate #love", topic: "Dance", author_id: 9, banana_count: 333, comment_count: 7, sound: "Frou Frou - Let Go")

#   user9_post2 = Post.create!(caption: "caught this clip of my besty at her recital!'", tags:"#ballet #beautiful #strong #dancers #dance #beautiful", topic: "Dance", author_id: 9, banana_count: 798, comment_count: 12, sound: "Hozier - Take Me to Church")

#   user10_post1 = Post.create!(caption: "professional makeup done by ME", tags:"#makeup #beauty #influencer #bananagram #foundation #eyeliner", topic: "Beauty", author_id: 10, banana_count: 12312, comment_count: 213)

  
#   Comment.create(giver_id:3, post_id:2, body: "Space, the final frontier. These are the voyages of the Starship Enterprise")
#   Comment.create(giver_id:2, post_id:4, body: "Space, the final frontier. These are the voyages of the Starship Enterprise")
#   Comment.create(giver_id:5, post_id:6, body: "Space, the final frontier. These are the voyages of the Starship Enterprise")
#   Comment.create(giver_id:6, post_id:8, body: "Space, the final frontier. These are the voyages of the Starship Enterprise")
#   Comment.create(giver_id:8, post_id:18, body: "Space, the final frontier. These are the voyages of the Starship Enterprise")
#   Comment.create(giver_id:6, post_id:12, body: "Space, the final frontier. These are the voyages of the Starship Enterprise")
#   Comment.create(giver_id:10, post_id:13, body: "Space, the final frontier. These are the voyages of the Starship Enterprise")
#   Comment.create(giver_id:9, post_id:3, body: "Space, the final frontier. These are the voyages of the Starship Enterprise")
#   Comment.create(giver_id:7, post_id:7, body: "Space, the final frontier. These are the voyages of the Starship Enterprise")
  


  



#   file = URI.open('https://bananatok-seeds.s3.us-west-1.amazonaws.com/16.mp4')
#   user9_post1.video.attach(io: file, filename: '16.mp4')

#   file = URI.open('https://bananatok-seeds.s3.us-west-1.amazonaws.com/1.mp4')

#   user1_post1.video.attach(io: file, filename: '1.mp4')

#   file = URI.open('https://bananatok-seeds.s3.us-west-1.amazonaws.com/3.mp4')
  
#   user2_post1.video.attach(io: file, filename: '3.mp4')

#   file = URI.open('https://bananatok-seeds.s3.us-west-1.amazonaws.com/17.mp4')
#   user9_post2.video.attach(io: file, filename: '17.mp4')

#   file = URI.open('https://bananatok-seeds.s3.us-west-1.amazonaws.com/4.mp4')
  
#   user2_post2.video.attach(io: file, filename: '4.mp4')
  
#   file = URI.open('https://bananatok-seeds.s3.us-west-1.amazonaws.com/6.mp4')
  
#   user3_post1.video.attach(io: file, filename: '6.mp4')
  
#   file = URI.open('https://bananatok-seeds.s3.us-west-1.amazonaws.com/5.mp4')
  
#   user3_post2.video.attach(io: file, filename: '5.mp4')
  
#   file = URI.open('https://bananatok-seeds.s3.us-west-1.amazonaws.com/2.mp4')

#   user1_post2.video.attach(io: file, filename: '2.mp4')

#   file = URI.open('https://bananatok-seeds.s3.us-west-1.amazonaws.com/7.mp4')

#   user4_post1.video.attach(io: file, filename: '7.mp4')

#   file = URI.open('https://bananatok-seeds.s3.us-west-1.amazonaws.com/8.mp4')
#   user5_post1.video.attach(io: file, filename: '8.mp4')

#   file = URI.open('https://bananatok-seeds.s3.us-west-1.amazonaws.com/9.mp4')
#   user5_post2.video.attach(io: file, filename: '9.mp4')

#   file = URI.open('https://bananatok-seeds.s3.us-west-1.amazonaws.com/10.mp4')
#   user6_post1.video.attach(io: file, filename: '10.mp4')

#   file = URI.open('https://bananatok-seeds.s3.us-west-1.amazonaws.com/11.mp4')
#   user7_post1.video.attach(io: file, filename: '11.mp4')

#   file = URI.open('https://bananatok-seeds.s3.us-west-1.amazonaws.com/12.mp4')
#   user7_post2.video.attach(io: file, filename: '12.mp4')

#   file = URI.open('https://bananatok-seeds.s3.us-west-1.amazonaws.com/13.mp4')
#   user7_post3.video.attach(io: file, filename: '13.mp4')

#   file = URI.open('https://bananatok-seeds.s3.us-west-1.amazonaws.com/14.mp4')
#   user8_post1.video.attach(io: file, filename: '14.mp4')

#   file = URI.open('https://bananatok-seeds.s3.us-west-1.amazonaws.com/15.mp4')
#   user8_post2.video.attach(io: file, filename: '15.mp4')

#   file = URI.open('https://bananatok-seeds.s3.us-west-1.amazonaws.com/18.mp4')
#   user10_post1.video.attach(io: file, filename: '18.mp4')














  





  








# end
