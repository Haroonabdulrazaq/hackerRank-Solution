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
