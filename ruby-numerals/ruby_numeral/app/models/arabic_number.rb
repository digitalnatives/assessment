class ArabicNumber < ActiveRecord::Base

  def to_words
    numeric_to_word = NumericToWord.new
    numeric_to_word.convert(self.number_value.to_i)
  end
end
