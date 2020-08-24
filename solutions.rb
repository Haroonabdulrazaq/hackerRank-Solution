# FizzBuzz
100.times do |i|
    i+=1
    if i%15==0
        puts "FizzBuzz"
    elsif i%5==0
        puts "Buzz"
    elsif i%3==0
        puts "Fizz"
    else
        puts i
    end
end

# Repeated String

def repeatedString(s, n) 
    remainder_count = s[0,(n % s.length)].count "a"
    whole_count =  (s.count 'a') * (n / s.length) 
    whole_count + remainder_count
end

puts repeatedString('aba', 10)

# Anagram
if s.length.odd?
    return -1
  else
    middle = s.length/2
    first_half = s[0,middle]
    second_half = s[middle,s.length-1]
     second_half =second_half.split('')
    
     first_half.each_char do |i|
      second_half.each_with_index do |ele, index|
        if i == ele
          second_half.delete_at(index)
            break
        end
      end
     end
    return second_half.length
  end