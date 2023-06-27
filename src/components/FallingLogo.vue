<template>
    <div class="flex justify-center items-center h-screen">
        <div class="flex flex-col items-center">
            <img src="@/assets/Logo/Falling.svg" alt="Falling Logo" class="w-80 h-80 object-obtain mb-4" />
            <div>
                <h1
                    class="font-bold text-lg bg-gradient-to-r from-stone-600 to-indigo-600 bg-clip-text text-transparent mb-2">
                    Connect with any device.
                </h1>
                <h3 class="font-semibold bg-gradient-to-r from-stone-500 to-indigo-800 bg-clip-text text-transparent">
                    Everything you need is an internet connection.
                </h3>
                <div>
                    <h1
                        class="font-bold bg-gradient-to-r from-sky-900 to-slate-900 bg-clip-text text-transparent text-md mt-5">
                        If You Don't Have an Account, Please
                        <router-link to="/register" class="bg-gradient-to-r text-lg from-amber-600 to-rose-900 bg-clip-text text-transparent">Register !</router-link>.
                    </h1>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    name: 'FallingLogo',
}
</script>
  