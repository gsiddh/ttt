<script>
  import { onMount } from 'svelte';
  import { getMessaging, getToken, onMessage } from "firebase/messaging";
  import { app } from './firebase';
  import Board from './Board.svelte';

  let token = '';
  let notificationPermission = Notification.permission;

  async function requestPermission() {
    try {
      const permission = await Notification.requestPermission();
      notificationPermission = permission;
      if (permission === 'granted') {
        const messaging = getMessaging(app);
        const currentToken = await getToken(messaging, { vapidKey: 'BH2rCQkMjwmOTRH9jkjykkmx5xUx25cDweLmL6cTlbJznP_nxtivrycwO4ltmlX3TyiHQjGGjJtZJqADYefGtPE' });
        if (currentToken) {
          token = currentToken;
          console.log('FCM Token:', currentToken);
        } else {
          console.log('No registration token available. Request permission to generate one.');
        }
      } else {
        console.log('Unable to get permission to notify.');
      }
    } catch (err) {
      console.log('An error occurred while retrieving token. ', err);
    }
  }

  onMount(() => {
    const messaging = getMessaging(app);
    onMessage(messaging, (payload) => {
      console.log('Message received. ', payload);
      new Notification(payload.notification.title, {
        body: payload.notification.body,
        icon: payload.notification.icon,
      });
    });
  });
</script>

<main>
  <h1>Tic-Tac-Toe</h1>
  <Board />
  <button on:click={requestPermission}>Request Notification Permission</button>
  {#if token}
    <p>FCM Token: {token}</p>
  {/if}
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }
</style>
