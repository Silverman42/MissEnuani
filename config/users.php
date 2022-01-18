<?php

/**
 * User configurations
 * 
 * @description - User data map for updating and creating clients/contestants 
 * and admins
 */

return [
    'client' => [
        'create' => [
            'first_name',
            'last_name',
            'phone_number',
            'email',
            'password',
            'position',
            'competition_id'
        ],
        'update_competition_data' => [
            'competition_id',
            'has_paid',
            'profile_stage',
            'position',
        ],
        'update_access_data' => [
            'email',
            'password',
        ]
    ],
    'admin' => [
        'create' => [
            'first_name',
            'last_name',
            'phone_number',
            'email',
            'password',
        ],
        'update_profile' => [
            'first_name',
            'last_name',
            'phone_number',
            'email',
            'password',
            'facebook_url',
            'twitter_url',
            'instagram_url',
        ]
    ]
];
