1. values added: 20
2. final result: 20
3. You should not use var because it's function-scoping leads to hard to track variables.
4. values added: 20
5. Line 13 will return an error because result was defined using "let" which only defines it in the scope of the if statement. Line 13 is outside of this definition so the variable result is not defined.
6. Line 9 will never be printed because an error would be returned first when the code attempted to change "const result". You cannot change a const variable once it is declared.
7. Line 13 would also never be printed for the same reason. Even if the code made it to line 13, result was declared using const which keeps it in the scope of the if statement.