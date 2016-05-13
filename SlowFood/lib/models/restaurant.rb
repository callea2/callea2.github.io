require 'dm-core'
require 'dm-sqlite-adapter'
require 'dm-migrations'
require 'dm-serializer'
require 'dm-timestamps'
require 'dm-transactions'
require 'dm-types'
require 'dm-validations'

class Restaurant
  include DataMapper::Resource

  property :id, Serial, key: true
  property :name, String, length: 128

  belongs_to :user
end
