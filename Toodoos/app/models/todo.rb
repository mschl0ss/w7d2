# == Schema Information
#
# Table name: todos
#
#  id         :bigint           not null, primary key
#  title      :string           not null
#  body       :text             not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Todo < ApplicationRecord

  validates :title, :body, presence: true

  
  
end
