'use client'
import { useEffect } from 'react';
import { signIn } from 'next-auth/react';

export const ClientContainer: React.FC = () => {
  useEffect(() => {
    // Автоматический редирект на Keycloak
    signIn('keycloak', { callbackUrl: "/" });
  }, []);

  return null;
};
