


20.times do
  User.create(
    name: Faker::TheFreshPrinceOfBelAir.character
    nickname: Faker::TwinPeaks.character
    email: Faker::Internet.free_email
    encrypted_password: Faker::Internet.password
  )

5.times do
  Post.create(
  name: Faker::Pokemon.move
  body: Faker::TwinPeaks.quote
)
  end
end



