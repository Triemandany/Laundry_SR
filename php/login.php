<?php
$users = [
  'admin' => '12345',
  'user1' => 'password',
];

header('Content-Type: application/json');

$username = $_POST['username'] ?? '';
$password = $_POST['password'] ?? '';

if (isset($users[$username]) && $users[$username] === $password) {
  echo json_encode(['success' => true]);
} else {
  echo json_encode([
    'success' => false,
    'message' => 'Username atau password salah!'
  ]);
}

?>