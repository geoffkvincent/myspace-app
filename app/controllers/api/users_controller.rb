class Api::UsersController < ApplicationController
  def index
    @users = User.all
  end

  def show
  end

  def create
  end

  def update
  end

  def destroy
  end
end