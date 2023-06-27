<template>
    <div class="w-full flex min-h-screen">
        <div class="w-1/2 bg-gradient-to-tr from-blue-300 to-white">
            <FallingLogo />
        </div>
        <div class="w-1/2 bg-gradient-to-br from-white to-blue-300 flex items-center justify-center">
            <div class="w-96 bg-white rounded-lg shadow-lg p-8">
                <div class="flex items-center justify-center">
                    <img src="@/assets/Logo/Logo.png" alt="Logo" class="w-20 h-20 mr-2" />
                </div>
                <h2 class="text-2xl font-bold text-center text-indigo-800 mb-4">Sign In To Your Account</h2>
                <form>
                    <div class="mb-6">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="username">Username</label>
                        <input
                            class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-indigo-500 placeholder-gray-400"
                            type="username" id="username" v-model="username" placeholder="Enter your username" />
                    </div>
                    <div class="mb-6">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="password">Password</label>
                        <input
                            class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-indigo-500 placeholder-gray-400"
                            type="password" id="password" v-model="password" placeholder="Enter your password" />
                    </div>
                    <button
                        class="bg-gradient-to-r from-slate-700 to-cyan-400 hover:from-cyan-400 hover:to-slate-700 text-white rounded-lg px-4 py-2 text-sm font-semibold transition-colors duration-300 w-full"
                        type="submit">Login</button>
                </form>
            </div>
        </div>

    </div>
</template>

<script>
import FallingLogo from '@/components/FallingLogo.vue';
export default {
    components: {
        FallingLogo,
    },
    name: 'Login',
    data() {
        return {
            username: '',
            password: ''
        };
    }
}
</script>
  