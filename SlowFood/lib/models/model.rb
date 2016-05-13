require 'dm-core'
require 'dm-sqlite-adapter'
require 'dm-migrations'
require 'dm-serializer'
require 'dm-timestamps'
require 'dm-transactions'
require 'dm-types'
require 'dm-validations'

class User
  include DataMapper::Resource

  property :id, Serial, key: true
  property :username, String, length: 128
  property :password, BCryptHash

  has 1, :restaurant

  def authenticate(attempted_password)
    if self.password == attempted_password
      true
    else
      false
    end
  end
end
