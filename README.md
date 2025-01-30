# MongoDB $inc Operator Error: Unexpected Value Type

This repository demonstrates a common error when using the `$inc` operator in MongoDB update operations.  The `$inc` operator is designed to increment a numeric field by a specified value.  However, providing a non-numeric value will result in an error or unexpected behavior.

## Bug Description
The provided code snippet shows an example where `$inc` is used with a non-numeric value causing the operation to fail or update the field with an incorrect value.

## Solution
The solution addresses the error by ensuring the provided value to the `$inc` operator is a valid number. This ensures the update operation runs correctly, incrementing the numeric field as intended.
