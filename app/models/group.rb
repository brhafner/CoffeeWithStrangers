class Group < ApplicationRecord
    validates :title, :about, :organizer_id, :city_id, presence: true


    # CHANGE THIS once you create an organizers & groupings table

    # belongs_to :organizer,
    #     foreign_key: :organizer_id,
    #     class_name: :User

    # has_many :groupees,
    #     through: :goupings
    #     source: :users
end
