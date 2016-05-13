require './lib/models/restaurant'
require './spec/spec_helper'

describe Restaurant do
  it { is_expected.to have_property :id }
  it { is_expected.to have_property :name }
  it { is_expected.to belong_to :user }
end
