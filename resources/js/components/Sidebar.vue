<template>
    <div class="relative flex min-h-screen">
        <!-- sidebar -->
        <div 
        class="
        bg-cyan-600 
        text-cyan-100 
        w-64 p-5 
        absolute 
        inset-y-0 
        left-0 
        md:relative 
        md:-translate-x-0 
        transform 
        -translate-x-full 
        transition 
        duration-200 
        ease-in-out"
        :class="{'relative -translate-x-0':showSidebar}"
        >
            <a href="" class="flex items-center font-extrabold">Texting Solution</a>
            <nav class="mt-10 pl-1">
                <router-link :to="{name: 'dashboard'}" class="flex items-center hover:bg-cyan-700 px-4 py-2 rounded-md">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                    <span class=" text-cyan-100 font-semibold ml-2">Dashboard</span>
                </router-link>
                <router-link :to="{name: 'contacts'}" class="flex items-center hover:bg-cyan-700 px-4 py-2 rounded-md">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    <span class="text-cyan-100 px-2 font-semibold">Contacts</span>
                </router-link>
                <router-link :to="{name: 'groups'}" class="flex items-center hover:bg-cyan-700 px-4 py-2 rounded-md">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <span class="text-cyan-100 px-2 font-semibold">Groups</span>
                </router-link>
                <router-link :to="{name: 'messaging'}" class="flex items-center hover:bg-cyan-700 px-4 py-2 rounded-md">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                    </svg>
                    <span class="text-cyan-100 px-2 font-semibold">Messaging</span>
                </router-link>
                <router-link :to="{name: 'campaigns'}" class="flex items-center hover:bg-cyan-700 px-4 py-2 rounded-md">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                    </svg>
                    <span class="text-cyan-100 px-2 font-semibold">Campaigns</span>
                </router-link>
                <router-link :to="{name: 'auto-responder'}" class="flex items-center hover:bg-cyan-700 px-4 py-2 rounded-md">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
                    </svg>
                    <span class="text-cyan-100 px-2 font-semibold">Auto Responder</span>
                </router-link>
                <router-link :to="{name: 'settings'}" class="flex items-center hover:bg-cyan-700 px-4 py-2 rounded-md">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span class="text-cyan-100 px-2 font-semibold">Settings</span>
                </router-link>
            </nav>
        </div>
        <!-- main content -->
        <div class="flex-1">
            <!-- header -->
            <div class="bg-cyan-50 shadow px-4 py-4 flex items-center justify-between">
                <div>
                <button class="lg:hidden text-cyan-600" @click="toggleSidebar">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h8m-8 6h16" />
                    </svg>
                </button>
                </div>
                <div class="text-cyan-600 ">
                <svg xmlns="http://www.w3.org/2000/svg" class="float-right h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
                </div>
            </div>
            <!-- content -->
            <div class="p-4 text-cyan-700 font-bold">
                content here
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        data:function() {
            return {
                showSidebar: false, //starts off invisible
            }
   
        },
        methods: {
        toggleSidebar(){
            this.showSidebar = !this.showSidebar
        }
        }
    }
</script>

<style>

</style>