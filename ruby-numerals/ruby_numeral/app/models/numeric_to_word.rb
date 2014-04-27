class NumericToWord

  THOUSAND = 1000
  RANGE_GREATER_HUNDRED = %w(thousand million billion trillion quadrillion quintillion sextillion septillion octillion nonillion decillion)
  RANGE_HUNDRED   = %w(unused unused twenty thirty forty fifty sixty seventy eighty ninety)
  RANGE_TWENTY  = %w(ten eleven twelve thirteen fourteen fifteen sixteen seventeen eighteen nineteen)
  RANGE_TEN = %w(zero one two three four five six seven eight nine)

  def convert(number)
    case number <=> 0
    when 0
      RANGE_TEN[0]
    when -1
      'negative ' + convert(-number)
    else
      words(number, 0).flatten.join(' ')
    end
  end

  def words(val, flag)
    words_array = words(val / THOUSAND, flag + 1) << RANGE_GREATER_HUNDRED[flag] if val >= THOUSAND
    words_array.to_a << less_than_thousand(val % THOUSAND, flag)
  end

  def less_than_thousand(val, flag)
    words_array = [RANGE_TEN[val / 100]] << 'hundred' if val >= 100
    words_array.to_a << less_than_hundred(val % 100, (flag == 0 && !words_array.nil?))
  end

  def less_than_hundred(val, and_true)
    words_array = [('and' if and_true)]
    case val
    when 0
      []
    when 1...10
      words_array << RANGE_TEN[val]
    when 10...20
      words_array << RANGE_TWENTY[val - 10]
    else
      d = val % 10
      words_array << (RANGE_HUNDRED[val / 10] + ('-' + RANGE_TEN[d] if d != 0).to_s)
    end
  end


end
