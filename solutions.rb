# Repeated String

def repeatedString(s, n) 
    remainder_count = s[0,(n % s.length)].count "a"
    whole_count =  (s.count 'a') * (n / s.length) 
    whole_count + remainder_count
end

puts repeatedString('aba', 10)