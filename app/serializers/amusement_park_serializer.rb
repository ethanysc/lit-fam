class AmusementParkSerializer < ActiveModel::Serializer
  attributes :id,
   :name,
   :address,
   :city,
   :state,
   :zipcode,
   :phone_number,
   :website,
   :operating_season,
   :description
end
