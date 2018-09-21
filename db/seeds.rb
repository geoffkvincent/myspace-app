


20.times do
  user = User.create(
    name: Faker::TheFreshPrinceOfBelAir.character,
    nickname: Faker::TwinPeaks.character,
    email: Faker::Internet.free_email,
    password: 'password',
  )

    5.times do
      user.posts.create(
      name: Faker::Pokemon.move,
      body: Faker::TwinPeaks.quote,
    )
  end
end



