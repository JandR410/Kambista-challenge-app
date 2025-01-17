// app.tsx
import React from 'react';
import { AuthProvider } from '../context/AuthContext';
import Layout from '../app/_layout';

export default function App() {
  return (
    <AuthProvider>
      <Layout />
    </AuthProvider>
  );
}